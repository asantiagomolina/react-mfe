class MyButton extends HTMLElement {
    constructor() {
        super();
        // Crear un Shadow DOM para encapsular el estilo y la estructura del botón
        this.attachShadow({ mode: 'open' });

        // Crear un elemento de botón
        const button = document.createElement('button');
        button.textContent = this.getAttribute('label') || 'Click me';

        // Añadir estilos al botón
        const style = document.createElement('style');
        style.textContent = `
            button {
                background-color: #6200ea;
                color: white;
                border: none;
                padding: 10px 20px;
                font-size: 16px;
                border-radius: 5px;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }
            button:hover {
                background-color: #3700b3;
            }
            button:active {
                background-color: #03dac5;
            }
        `;

        // Adjuntar el estilo y el botón al Shadow DOM
        this.shadowRoot?.append(style, button);

        // Agregar un event listener para manejar clics
        button.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('button-click', {
                detail: 'Button clicked!',
                bubbles: true,
                composed: true
            }));
        });
    }

    // Definir los atributos observados para reaccionar a cambios
    static get observedAttributes() {
        return ['label'];
    }

    // Responder a cambios de atributos
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null) {
        if (name === 'label' && this.shadowRoot) {
            const button = this.shadowRoot.querySelector('button');
            if (button) {
                button.textContent = newValue;
            }
        }
    }
}

// Registrar el nuevo componente como un elemento personalizado
customElements.define('my-button', MyButton);

export { };
