const deps: any = {};

class InjectorClass {
    public setAll (allDeps: any) {
        Object.keys(allDeps).forEach((key: string) => {
            deps[key] = allDeps[key];
        });
    }

    public set (name: string, dep: any) {
        deps[name] = dep;
    }

    public get (name: string, defaultValue?: any): any {
        return deps[name] || defaultValue;
    }
}

export const Injector = new InjectorClass();
