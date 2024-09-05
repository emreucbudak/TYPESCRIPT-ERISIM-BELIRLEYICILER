var Person = /** @class */ (function () {
    function Person(id, firstName, LastName) {
        // TIP BELIRTMEYI UNUTMA
        this.id = id;
        this.firstName = firstName;
        this.LastName = LastName;
    }
    Person.prototype.getFullName = function () {
        console.log(this.firstName + this.LastName);
    };
    return Person;
}());
var kisibilgim = new Person(14, 'Emre', 'Üçbudak');
kisibilgim.getFullName();
// ERIŞIM BELIRLEYICILERDE OTOMATİK OLARAK TÜMÜNÜN ERİŞİM BELİRLEYİCİSİ PUBLİC (HERKESE AÇIKTIR) PRİVATE (OLURSA GİZLENİR) READONLYDE(GİZLENMEZ AMA DEĞİŞTİRİLEMEZ SADECE OKUNUR) PROTECTEDDA CLASSIN DŞINDA OLMAZ ANCAK MİRAS ALINAN CLASSTA KULLANABİLİRİZ
