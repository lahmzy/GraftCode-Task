export const HelloWorldService = {
    Greet: async (name: string): Promise<string> => {
        // This is a mock implementation.
        // this would be replaced by the generated Graftcode client. but since I cant create a project key we use this for now
        console.log(`[Mock] Calling HelloWorldService.Greet with name: ${name}`);
        await new Promise((resolve) => setTimeout(resolve, 500));
        return `Hello ${name}, powered by Graftcode! (Mocked)`;
    },
    Add: async (a: number, b: number): Promise<number> => {
        console.log(`[Mock] Calling HelloWorldService.Add with a: ${a}, b: ${b}`);
        await new Promise((resolve) => setTimeout(resolve, 500));
        return a + b;
    }
};

export const GraftConfig = {
    host: "http://localhost:81"
};
