// Mobile menu toggle
function toggleMobileMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// Search functionality
function searchTools() {
  const searchBox = document.getElementById('searchBox');
  const searchTerm = searchBox.value.toLowerCase();
  const toolCards = document.querySelectorAll('.tool-card');
  
  toolCards.forEach(card => {
    const tags = card.getAttribute('data-tags') || '';
    const title = card.querySelector('h3').textContent.toLowerCase();
    const description = card.querySelector('p').textContent.toLowerCase();
    
    if (tags.includes(searchTerm) || title.includes(searchTerm) || description.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Copy to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showNotification('Copied to clipboard!');
  }).catch(err => {
    console.error('Failed to copy:', err);
  });
}

// Show notification
function showNotification(message) {
  const notification = document.createElement('div');
  notification.className = 'success-message';
  notification.textContent = message;
  notification.style.position = 'fixed';
  notification.style.bottom = '20px';
  notification.style.right = '20px';
  notification.style.zIndex = '9999';
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Show error
function showError(message, containerId) {
  const container = document.getElementById(containerId);
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.textContent = message;
  container.appendChild(errorDiv);
  
  setTimeout(() => {
    errorDiv.remove();
  }, 5000);
}

// Format JSON
function formatJSON(input, output) {
  try {
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, 2);
    document.getElementById(output).value = formatted;
    return true;
  } catch (e) {
    return false;
  }
}

// Minify JSON
function minifyJSON(input, output) {
  try {
    const parsed = JSON.parse(input);
    const minified = JSON.stringify(parsed);
    document.getElementById(output).value = minified;
    return true;
  } catch (e) {
    return false;
  }
}

// URL Encode
function urlEncode(input, output) {
  const encoded = encodeURIComponent(input);
  document.getElementById(output).value = encoded;
}

// URL Decode
function urlDecode(input, output) {
  const decoded = decodeURIComponent(input);
  document.getElementById(output).value = decoded;
}

// Timestamp to Date
function timestampToDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}

// Date to Timestamp
function dateToTimestamp(dateString) {
  const date = new Date(dateString);
  return Math.floor(date.getTime() / 1000);
}

// Hex to RGB
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Regex test
function testRegex(text, pattern) {
  try {
    const regex = new RegExp(pattern);
    return regex.test(text);
  } catch (e) {
    return false;
  }
}
