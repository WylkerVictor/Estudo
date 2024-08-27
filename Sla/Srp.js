var NotificacaoEmail = /** @class */ (function () {
    function NotificacaoEmail() {
    }
    NotificacaoEmail.prototype.enviaremail = function (mensagem, email) {
        console.log("Email enviado para ".concat(email, " - ").concat(mensagem));
    };
    return NotificacaoEmail;
}());
var NotificacaoSMS = /** @class */ (function () {
    function NotificacaoSMS() {
    }
    NotificacaoSMS.prototype.enviarsms = function (mensagem, telefone) {
        console.log("SMS enviado para ".concat(telefone, " | ").concat(mensagem));
    };
    return NotificacaoSMS;
}());
var nemail = new NotificacaoEmail();
nemail.enviaremail('OK EMAIL', "robertinho@gmail.com");
var nsms = new NotificacaoSMS();
nsms.enviarsms('OK SMS', '814234232');
