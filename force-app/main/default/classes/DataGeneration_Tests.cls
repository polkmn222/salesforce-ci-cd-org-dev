@isTest
private class DataGeneration_Tests {
  @isTest
  static void testBruteForceAccountCreation() {
    List<Account> accts = new List<Account>();
    Test.startTest();
      accts = [SELECT Id FROM Account];
    Test.stopTest();
    System.assert(accts.size() > 0, 'Was expecting to find at least one account');
  }
}