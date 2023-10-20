export function TablePlanColorText(input: string): string {
    if (input === "Yes" || input === "yes") {
        return "text-success";
    } else if (input === "No" || input === "no") {
        return "text-danger";
    } else if (input === "Limited" || input === "limited" || input === "Limited*") {
        return "text-warning"
    }
    return "";
}