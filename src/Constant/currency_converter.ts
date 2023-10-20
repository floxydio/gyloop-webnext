export function CurrencyConverter(input: string): string {
    if (input === "rupiah") {
        return "Rp";
    } else if (input === "dollar") {
        return "$";
    }
    return "";
}