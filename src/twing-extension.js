import { TwingExtension, TwingFunction } from 'twing';

class MyExtension extends TwingExtension {
    getFunctions() {
        return new Map([
            ['my_function', new TwingFunction(
                'my_function',
                (value: string) => Promise.resolve(new Map([[0, value]]))
            )]
        ]);
    }
}

twing.addExtension(new MyExtension(), 'my-extension');