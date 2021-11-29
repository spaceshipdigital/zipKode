import { Modal } from 'bootstrap';

class QBox {

    constructor(el) {
        this.qbox = el;

        if (this.qbox) {
            this.tabs = this.qbox.querySelectorAll('.qbox-progress li');
            this.steps = this.qbox.querySelectorAll('.step');

            this.state = {
                length: this.qbox.querySelectorAll('.qbox-progress li').length,
                currentStep: 1
            };

            this.events();

        }
    }

    events() {
        this.qbox.querySelector('#next-btn').addEventListener('click', () => {
            this.setStep(this.state.currentStep + 1);
        });

        this.qbox.querySelector('#prev-btn').addEventListener('click', () => {
            this.setStep(this.state.currentStep - 1);
        });

        this.qbox.querySelector('#exit-btn').addEventListener('click', () => {
            alert('exit');
        });

        this.qbox.querySelector('form').addEventListener('submit', e => {
            console.log('submit');
            e.preventDefault();
            const myModal = new Modal(document.getElementById('modal-pay'));
            myModal.show();
        });
    }

    // step = 1 is a first step
    setStep(step) {
        if (step > this.state.length || step < 1) {
            return;
        }

        this.clearSteps();

        // set active tab
        this.tabs[step - 1].classList.add('active');

        // set active content
        this.steps[step - 1].classList.add('show');

        // set step-1/step-last
        if (step === 1) {
            this.qbox.classList.add('step-1');
        }
        if (step === this.state.length) {
            this.qbox.classList.add('step-last');
        }

        this.state.currentStep = step;
    }

    clearSteps() {
        this.qbox.classList.remove('step-1', 'step-last');
        this.tabs.forEach(el => el.classList.remove('active'));
        this.steps.forEach(el => el.classList.remove('show'));
    }
}

export default QBox;