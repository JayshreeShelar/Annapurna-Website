/* FAQ accordion: <div data-faq> with <button> + <div data-answer> */
document.querySelectorAll('[data-faq] button').forEach((btn) => btn.onclick = () => {
  const item = btn.parentElement, answer = item.querySelector('[data-answer]'), wasOpen = item.dataset.open === 'true';
  document.querySelectorAll('[data-faq][data-open=true]').forEach((o) => { o.dataset.open = false; o.querySelector('[data-answer]').style.maxHeight = 0; });
  if (!wasOpen) { item.dataset.open = true; answer.style.maxHeight = answer.scrollHeight + 'px'; }
});
