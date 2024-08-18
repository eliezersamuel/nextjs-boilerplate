interface IComposeProvider {
    with: Array<React.ElementType>;
    children: React.ReactNode;
}

export function ComposeProvider({
    children,
    with: Providers,
}: IComposeProvider) {
    return (
        <>
            {Providers.reduce(
                (AccProviders, Provider) => (
                    <Provider>{AccProviders}</Provider>
                ),
                children,
            )}
        </>
    );
}
