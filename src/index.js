import './style.css';
import './assets/images/image_sofa.png';
import './assets/images/image_desk.png';
import $ from "jquery";


// маска для поля ввода номера телефона
const phoneInput = $("#tel");
phoneInput.mask('+7 (999) 999-99-99'); // маска для ввода номера телефона