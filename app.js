const SUPABASE_URL = 'https://haxzkbvxlogmugxrxztj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhheHprYnZ4bG9nbXVneHJ4enRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MzAyMjksImV4cCI6MjA4OTUwNjIyOX0.VrVV73SZAuaQ6nYydHcqDCOdPByZNT921ekOd3BB-dg';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('Supabase client initialized');

document.addEventListener('DOMContentLoaded', () => {
    // Navigation
    const navButtons = document.querySelectorAll('.nav__item');
    const panels = document.querySelectorAll('.panel');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.dataset.target;

            navButtons.forEach(navButton => navButton.classList.remove('is-active'));
            panels.forEach(panel => panel.classList.remove('is-visible'));

            button.classList.add('is-active');
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('is-visible');
            }
        });
    });

    // Authentication
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const userInfo = document.getElementById('user-info');
    const userEmail = document.getElementById('user-email');
    const logoutButton = document.getElementById('logout-button');

    // Handle login/signup form submission
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        // First, try to sign in
        let { data, error } = await _supabase.auth.signInWithPassword({
            email,
            password,
        });

        // If user doesn't exist, try to sign them up
        if (error && error.message.includes('Invalid login credentials')) {
            console.log('User not found, trying to sign up...');
            const { data: signUpData, error: signUpError } = await _supabase.auth.signUp({
                email,
                password,
            });

            if (signUpError) {
                alert(signUpError.message);
                console.error('Sign up error:', signUpError);
            } else {
                updateUserUI(signUpData.user);
            }
        } else if (error) {
            alert(error.message);
            console.error('Sign in error:', error);
        } else {
            updateUserUI(data.user);
        }
    });

    // Handle logout
    logoutButton.addEventListener('click', async () => {
        const { error } = await _supabase.auth.signOut();
        if (error) {
            console.error('Error logging out:', error);
        } else {
            updateUserUI(null);
        }
    });

    // Update UI based on user session
    function updateUserUI(user) {
        if (user) {
            userInfo.style.display = 'block';
            userEmail.textContent = user.email;
            loginForm.style.display = 'none';
        } else {
            userInfo.style.display = 'none';
            loginForm.style.display = 'block';
        }
    }

    // Check for an existing session
    async function checkSession() {
        const { data, error } = await _supabase.auth.getSession();
        if (data.session) {
            updateUserUI(data.session.user);
        } else {
            updateUserUI(null);
        }
    }

    checkSession();
});
