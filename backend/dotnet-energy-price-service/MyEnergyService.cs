namespace MyEnergyService;

public class HelloWorldService
{
    public static string Greet(string name)
    {
        return $"Hello {name}, powered by Graftcode!";
    }
    
    public static int Add(int a, int b)
    {
        return a + b;
    }
    
    public static string GetCurrentTime()
    {
        return DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");
    }
}