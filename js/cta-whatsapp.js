document.addEventListener('DOMContentLoaded', function() {
    // --- DADOS DA EMPRESA (MANTER ATUALIZADO) ---
    // Substituir pelo número de WhatsApp oficial da Quintilhano's.
    const whatsappNumber = '5511999999999'; // Formato internacional, sem '+' ou espaços.
    const message = 'Olá! Gostaria de fazer um orçamento.';
    // ---------------------------------------------

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Cria o elemento do link (botão)
    const ctaButton = document.createElement('a');
    ctaButton.href = whatsappLink;
    ctaButton.target = '_blank'; // Abrir em nova aba
    ctaButton.rel = 'noopener noreferrer';
    ctaButton.className = 'whatsapp-cta';
    ctaButton.setAttribute('aria-label', 'Fale conosco pelo WhatsApp');

    // Adiciona o ícone (SVG) e o texto dentro do botão
    ctaButton.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2 22L7.32 20.61C8.75 21.33 10.35 21.71 12.04 21.71C17.5 21.71 21.95 17.26 21.95 11.8C21.95 6.34 17.5 2 12.04 2ZM16.57 15.28C16.32 15.53 15.39 16.04 15.02 16.09C14.65 16.14 14.1 16.16 13.69 15.96C13.28 15.76 12.31 15.42 11.21 14.41C9.88 13.18 9.13 11.72 8.91 11.4C8.69 11.08 8.54 10.9 8.36 10.65C8.18 10.4 8.02 10.19 7.89 10.01C7.76 9.83 7.63 9.67 7.52 9.5C7.3 9.18 7.07 8.86 7.12 8.49C7.17 8.12 7.54 7.8 7.81 7.53C8.08 7.26 8.31 7.21 8.53 7.21C8.75 7.21 8.93 7.21 9.09 7.23C9.25 7.25 9.42 7.73 9.54 7.95C9.66 8.17 9.78 8.48 9.66 8.65C9.54 8.82 9.45 8.93 9.27 9.11C9.09 9.29 8.96 9.4 8.82 9.57C8.68 9.74 8.55 9.9 8.7 10.15C8.85 10.4 9.29 11.1 9.97 11.73C10.82 12.52 11.53 12.87 11.82 13.02C12.11 13.17 12.33 13.12 12.51 12.94C12.72 12.73 13.06 12.3 13.38 11.91C13.62 11.61 13.94 11.56 14.24 11.68C14.54 11.8 15.82 12.45 16.07 12.7C16.32 12.95 16.49 13.12 16.57 13.24C16.65 13.36 16.65 13.63 16.57 15.28Z"/>
        </svg>
        <span>Fale Conosco</span>`;

    // Adiciona o botão ao body
    document.body.appendChild(ctaButton);
});
