const SUPABASE_URL = 'https://haxzkbvxlogmugxrxztj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhheHprYnZ4bG9nbXVneHJ4enRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM5MzAyMjksImV4cCI6MjA4OTUwNjIyOX0.VrVV73SZAuaQ6nYydHcqDCOdPByZNT921ekOd3BB-dg';

const { createClient } = supabase;
const _supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

console.log('Supabase client initialized');

document.addEventListener('DOMContentLoaded', async () => {
    const { data: { session } } = await _supabase.auth.getSession();

    const onLoginPage = window.location.pathname.endsWith('login.html');

    if (onLoginPage) {
        if (session) {
            window.location.replace('index.html');
            return;
        }
        handleLoginForm();
    } else {
        if (!session) {
            window.location.replace('login.html');
            return;
        }
        setupMainApp(session.user);
    }
});

function handleLoginForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const signupButton = document.getElementById('signup-button');
    const guestButton = document.getElementById('guest-button');
    const errorMessage = document.getElementById('error-message');

    const setButtonsDisabled = (disabled) => {
        loginButton.disabled = disabled;
        signupButton.disabled = disabled;
        guestButton.disabled = disabled;
    };

    loginButton.addEventListener('click', async () => {
        setButtonsDisabled(true);
        errorMessage.textContent = '';

        const email = emailInput.value;
        const password = passwordInput.value;
        const { error } = await _supabase.auth.signInWithPassword({ email, password });

        if (error) {
            errorMessage.textContent = error.message;
            setButtonsDisabled(false);
        } else {
            window.location.replace('index.html');
        }
    });

    signupButton.addEventListener('click', async () => {
        setButtonsDisabled(true);
        errorMessage.textContent = '';

        const email = emailInput.value;
        const password = passwordInput.value;
        const { error } = await _supabase.auth.signUp({ email, password });

        if (error) {
            errorMessage.textContent = error.message;
            setButtonsDisabled(false);
        } else {
            alert('Sign up successful! Please check your email to confirm.');
            setButtonsDisabled(false);
        }
    });

    guestButton.addEventListener('click', async () => {
        setButtonsDisabled(true);
        errorMessage.textContent = '';

        const { error } = await _supabase.auth.signInAnonymously();

        if (error) {
            errorMessage.textContent = error.message;
            setButtonsDisabled(false);
        } else {
            window.location.replace('index.html');
        }
    });
}

function setupMainApp(user) {
    const navLinks = document.querySelectorAll('.nav__item');
    const panels = document.querySelectorAll('.panel');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.dataset.target;

            panels.forEach(panel => panel.classList.remove('is-visible'));
            navLinks.forEach(navLink => navLink.classList.remove('is-active'));

            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.classList.add('is-visible');
                link.classList.add('is-active');
            } else {
                document.getElementById('home').classList.add('is-visible');
                document.querySelector('[data-target=home]').classList.add('is-active');
            }
        });
    });

    const userInfo = document.getElementById('user-info');
    const userEmail = document.getElementById('user-email');
    const logoutButton = document.getElementById('logout-button');

    if (user) {
        userInfo.style.display = 'flex';
        userEmail.textContent = user.is_anonymous ? 'Guest User' : user.email;
    }

    logoutButton.addEventListener('click', async () => {
        await _supabase.auth.signOut();
        window.location.replace('login.html');
    });
}
