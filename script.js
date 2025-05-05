function showTab(tabId) {
    let tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none'); 
    document.getElementById(tabId).style.display = 'block'; 
}

window.onload = function() {
    showTab('home');
};

function encryptPassword() {
    const password = document.getElementById('userPassword').value;
    if (password) {
        let encrypted = base64Encrypt(password);
        document.getElementById('encryptedResult').innerText = "Criptografado: " + encrypted;
    } else {
        alert("Por favor, insira uma senha.");
    }
}

function decryptPassword() {
    const encryptedPassword = document.getElementById('encryptedPassword').value;
    if (encryptedPassword) {
        let decrypted = base64Decrypt(encryptedPassword);
        document.getElementById('decryptedResult').innerText = "Descriptografado: " + decrypted;
    } else {
        alert("Por favor, insira uma senha criptografada.");
    }
}

function base64Encrypt(password) {
    return btoa(password);
}

function base64Decrypt(encryptedPassword) {
    try {
        return atob(encryptedPassword);
    } catch (e) {
        return "Erro ao descriptografar!";
    }
}
