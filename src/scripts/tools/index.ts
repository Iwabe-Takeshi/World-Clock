/**
 * Returns the constructor of the argument or type when constructor is not found.
 */
export function GetConstructorOrTypeOf(arg: any): string {
    if (!arg)
        return "undefined";
    
    return arg?.constructor.name ?? typeof arg;
}

/**
 * Writes a static debug message outputs to console.
 */
export function DEBUG(...data: any[]): void {
    console.debug(...data);
}

/**
 * Writes a static error message outputs to console.
 */
export function ERROR(...data: any[]): void {
    console.error(...data);
}

/**
 * Writes a static message outputs to console.
 */
export function LOG(...data: any[]): void {
    console.log(...data);
}

/**
 * Writes a static warning message outputs to console.
 */
export function WARN(...data: any[]): void {
    console.warn(...data);
}

/**
 * Returns the specified function name.
 */
export function FuncName(func: Function): string {
    return IsFunc(func) && func.name ? func.name : "[Anonymous]";
}

/**
 * Returns the current date & time of your local machine in localeString format.
 */
export function LocaleDateTime(): string {
    return new Date().toLocaleString();
}