class NotificacaoEmail {
    enviaremail(mensagem:string, email:string):void{
        console.log(`Email enviado para ${email} | ${mensagem}`)
    }

}

class NotificacaoSMS{
    enviarsms(mensagem:string, telefone:string){
        console.log(`SMS enviado para ${telefone} | ${mensagem}`)
    }
}

const nemail = new NotificacaoEmail()
nemail.enviaremail('OK EMAIL', "robertinho@gmail.com")

const nsms = new NotificacaoSMS()
nsms.enviarsms('OK SMS', '814234232')