public class AccountHandler {
	public static void insertAccount (Integer value){
        
        Integer N = 1;
        
        List<Account> addAccounts  = new List<Account>();
        while(N <= value){
            Account acc = new Account();
            acc.Name = 'Acme Inc N' + N;
            acc.AccountNumber = 'A000n' + N;
            addAccounts.add(acc);
            N = N + 1;
            
        }
       
        insert addAccounts;
    }
}