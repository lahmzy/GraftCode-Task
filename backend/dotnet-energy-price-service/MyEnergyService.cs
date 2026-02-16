namespace MyEnergyService;

public class EnergyPriceCalculator
{
    public static double GetPrice()
    {
        return new Random().Next(100, 105);
    }
    
    public static int GetRandomNumber()
    {
        return new Random().Next(1, 101);
    }
    
    public static double GetRandomDiscount()
    {
        return new Random().NextDouble() * 0.3; /
    }
}