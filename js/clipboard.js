
window.addEventListener('load', function() {
  
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'ERC-20-copy-text');
const $defaultMessage = document.getElementById('ERC-20-default-message');
const $successMessage = document.getElementById('ERC-20-success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');
}

const resetToDefault = () => {
    $defaultMessage.classList.remove('hidden');
    $successMessage.classList.add('hidden');
}
})

window.addEventListener('load', function() {
  
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'TON-copy-text');
const $defaultMessage = document.getElementById('TON-default-message');
const $successMessage = document.getElementById('TON-success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');
}

const resetToDefault = () => {
    $defaultMessage.classList.remove('hidden');
    $successMessage.classList.add('hidden');
}
})

window.addEventListener('load', function() {
  
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'TON2-copy-text');
const $defaultMessage = document.getElementById('TON2-default-message');
const $successMessage = document.getElementById('TON2-success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');
}

const resetToDefault = () => {
    $defaultMessage.classList.remove('hidden');
    $successMessage.classList.add('hidden');
}
})

window.addEventListener('load', function() {
  
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'TRC-20-copy-text');
const $defaultMessage = document.getElementById('TRC-20-default-message');
const $successMessage = document.getElementById('TRC-20-success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');
}

const resetToDefault = () => {
    $defaultMessage.classList.remove('hidden');
    $successMessage.classList.add('hidden');
}
})

window.addEventListener('load', function() {
  
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'SOL-copy-text');
const $defaultMessage = document.getElementById('SOL-default-message');
const $successMessage = document.getElementById('SOL-success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');
}

const resetToDefault = () => {
    $defaultMessage.classList.remove('hidden');
    $successMessage.classList.add('hidden');
}
})

window.addEventListener('load', function() {
  
const clipboard = FlowbiteInstances.getInstance('CopyClipboard', 'BEP-20-copy-text');
const $defaultMessage = document.getElementById('BEP-20-default-message');
const $successMessage = document.getElementById('BEP-20-success-message');

clipboard.updateOnCopyCallback((clipboard) => {
    showSuccess();

    // reset to default state
    setTimeout(() => {
        resetToDefault();
    }, 2000);
})

const showSuccess = () => {
    $defaultMessage.classList.add('hidden');
    $successMessage.classList.remove('hidden');
}

const resetToDefault = () => {
    $defaultMessage.classList.remove('hidden');
    $successMessage.classList.add('hidden');
}
})
