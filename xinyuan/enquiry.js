function createEnquiry(fields) {
  return ['Hello XinYuan, I would like a custom packaging quote.',
    `Name: ${fields.name.trim()}`, `Company: ${fields.company.trim() || 'Not specified'}`,
    `Packaging: ${fields.product}`, `Quantity: ${fields.quantity.trim()}`,
    `Destination: ${fields.destination.trim()}`, `Requirements: ${fields.requirements.trim()}`].join('\n');
}
const form = document.querySelector('#quote-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = Object.fromEntries(new FormData(form));
  for (const name of ['name', 'quantity', 'destination', 'requirements']) {
    if (!fields[name].trim()) { form.elements[name].focus(); return; }
  }
  window.location.href = `https://wa.me/8618079608514?text=${encodeURIComponent(createEnquiry(fields))}`;
});
