@isTest
private class AnimalLocatorTest {
    @isTest static void AnimalLocatorMock1(){
        try{
            Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
            String result = AnimalLocator.getAnimalNameById(1);
            String expectedResult = 'fox';
            System.assertEquals(result, expectedResult);
        }
        catch(Exception e) {
            System.debug('The following exception has occurred: ' + e.getMessage());
        }
    }
}