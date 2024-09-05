class Person {
    id;
    firstName;
    LastName;
    constructor(id:number,firstName:string,LastName:string) {
        // TIP BELIRTMEYI UNUTMA
        this.id = id;
        this.firstName = firstName;
        this.LastName = LastName;
    }
    getFullName() {
        console.log(this.firstName + this.LastName)
    }
}
let kisibilgim = new Person(14,'Emre', 'Üçbudak')
kisibilgim.getFullName();
// ERIŞIM BELIRLEYICILERDE OTOMATİK OLARAK TÜMÜNÜN ERİŞİM BELİRLEYİCİSİ PUBLİC (HERKESE AÇIKTIR) PRİVATE (OLURSA GİZLENİR) READONLYDE(GİZLENMEZ AMA DEĞİŞTİRİLEMEZ SADECE OKUNUR) PROTECTEDDA CLASSIN DŞINDA OLMAZ ANCAK MİRAS ALINAN CLASSTA KULLANABİLİRİZ