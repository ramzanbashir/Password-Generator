function generatePassword() {
    var length = document.getElementById('length').value;
    var includeUppercase = document.getElementById('uppercase').checked;
    var includeLowercase = document.getElementById('lowercase').checked;
    var includeNumbers = document.getElementById('numbers').checked;
    var includeSymbols = document.getElementById('symbols').checked;

    var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    var numberChars = '0123456789';
    var symbolChars = '!@#$%^&*_-+=?';

    let validChars = '';
    if (includeUppercase) validChars += uppercaseChars;
    if (includeLowercase) validChars += lowercaseChars;
    if (includeNumbers) validChars += numberChars;
    if (includeSymbols) validChars += symbolChars;

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * validChars.length);
        generatedPassword += validChars.charAt(randomIndex);
    }

    document.getElementById('passwordResult').value = generatedPassword;
}
