# node_js_2fa

#Techs: node js, typescript, mongodb + mongoose, twilio</br>

Api rest de autenticação de 2 fatores, foi utilizado o Twilio</br>
para fazer o envio de sms para o celular</br>, objetivo de apenas aprender sobre o metodo

Se quiser testar, faça o registro no site do twilio e utilize os dados no arquivo .env

TWILIO_ACCOUNT_SID=TWILIO_ACCOUNT_SID
TWILIO_AUTH_TOKEN=TWILIO_AUTH_TOKEN
TWILIO_NUMBER=NUMERO_QUE_TWILIO_DA
MONGODB_URI=MONGODB

Se você conseguir logar é enviado os dados e o sms para o front e celular para verificação.

Se o numero de envio de sms não for encontrado ele dispara um error</br>

Não tem nenhum validador além de checar se o a senha é igual ao email registro e email já foi registrado</br>


post("/users/create")
get("/users/find")
post("/users/sign_in")
delete("/delete/users")

