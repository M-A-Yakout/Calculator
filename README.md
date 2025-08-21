# ☁️ Cloud Calculator

# A sleek, lightning-fast **web calculator** built with vanilla HTML5, CSS3 (Flexbox + Grid) and ES6+ JavaScript.  
---

## 🚀 Live Demo  
# 👉  https://m-a-yakout.github.io/Calculator/

---

## 📸 Screenshot  
<img width="1252" height="1143" alt="image" src="https://github.com/user-attachments/assets/9c498a2d-5103-4f4c-9dd7-732787cc0fa4" />


---

## ✨ Features

- **100 % Vanilla Stack** – no frameworks, no build tools  
- **Dark-mode-first** & fully responsive (mobile → desktop)  
- **Keyboard & mouse** support  
- **Floating cloud** animation for fun UX  
- **High precision** arithmetic (rounded to 12 decimals to fight float errors)  

## 📁 Project Structure

```
├── index.html      # semantic markup
├── styles.css      # responsive, dark-mode CSS (CSS Grid + vars)
├── script.js       # ES6+ module, no globals
└── README.md       # you are here
```

---

## ⌨️ Keyboard Shortcuts

| Key        | Action           |
|------------|------------------|
| 0-9, .     | append digit     |
| +, -, *, / | choose operator  |
| Enter, =   | calculate        |
| Backspace  | delete last char |
| Delete     | clear all        |

---

## 🎨 Customize

- Swap the cloud GIF: replace `src` in the `<img class="cloud-gif">` tag.  
- Colors & fonts: tweak CSS variables at the top of `styles.css`.  
- Add new functions: extend the `performCalculation()` switch in `script.js`.
