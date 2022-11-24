trigger AccountAddressTrigger on Account (before insert, before update) {
    for (Account a : Trigger.new) {
        a.AccountNumber = '12345678';
        if (a.Match_Billing_Address__c == true) {
                a.ShippingPostalCode = a.BillingPostalCode;
        }
    }
}