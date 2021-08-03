mocha.setup("bdd");
let assert = chai.assert;
describe("Bank",function(){
    it("must return empty array if nothing is added",function(){
        let bank=new Bank();
        assert.equal(0,bank.total());
    });
    it("must add and close account",function(){
        let bank=new Bank();
        bank.addAccount("one2three");
        assert.equal(1,bank.total());
        bank.closeAccount("one2three");
        assert.equal(0,bank.total());
    });
    it("must generate report",function(){
        let bank=new Bank();
        bank.addAccount("one");
        bank.addAccount("two");
        bank.addAccount("three");
        bank.addAccount("four");
        bank.addAccount("five");
        bank.addAccount("six");
        assert.equal("one\ntwo\nthree\nfour\nfive\nsix",bank.accountReport());
    });
});
describe("Account",function(){
    it("must have 0 balance",function(){
        assert.equal(new Account("12").getBalance(),0.0);
    });
});
describe("Deposit",function(){
    it("if -ve value provided error must throw",function(){
        let acc=new Account("addedaccount");
        assert.throw(()=>acc.deposit(-10), Error);
    });
    it("must add the right amount",function(){
        let acc= new Account("addedaccount");
        acc.deposit(10);
        assert.equal(acc.getBalance(),10);
    });
});
describe("SavingsAccount",function(){
    it("must throw error if the balance is zero",function(){
        let acc=new SavingsAccount("addedsavingaccount",10);
        assert.throw(()=>acc.addInterest(),Error);
    })
    it("must add the amount of interest",function(){
        let acc=new SavingsAccount("1234",10);
        acc.deposit(110);
        acc.addInterest();
        assert.equal(acc.getBalance(),121);
    });
})
describe("CheckingAccount",function(){
    it("must throw error if provided -ve amount error must throw",function(){
        let acc=new CheckingAccount("100",140);
        assert.throw(()=>acc.withdraw(-10),Error);
    });
    it("must allow up to overdraft amount",function(){
        let acc=new CheckingAccount("checkingaccount",800);
        acc.withdraw(100);
        assert.equal(-100,acc.getBalance());
    });
    it("must throw error if withdrawal is below overDraft",function(){
        let acc=new CheckingAccount("100",120);
        assert.throw(()=>acc.withdraw(121),Error);
    });
});
describe("withdraw",function(){
    it("must throw error if negative value provided",function(){
        let acc=new Account("account");
        assert.throw(()=>acc.withdraw(-10), Error);
    });
    it("must throw error if withdrawn amount is greater",function(){
        let acc=new Account("account");
        assert.throw(()=>acc.withdraw(1),Error);
    });
})

describe("end of month",function(){
    it("normal account must return empty string",function(){
        let acc=new Account("123");
        assert.equal("",acc.endOfMonth());
    });
    it("checking account with negative balance must start with warning",function(){
        let acc=new CheckingAccount("account",10);
        acc.withdraw(10);
        assert.equal(true,acc.endOfMonth().startsWith("Warn"));
    })
});
window.onload=function(){
    mocha.run();
}