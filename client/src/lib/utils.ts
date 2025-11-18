import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormData(form: HTMLFormElement): Record<string, unknown> {
  const res: Record<string, unknown> = {};

  form.querySelectorAll('input, select, textarea').forEach((input) => {
    if (input instanceof HTMLInputElement) {

      if (input.type === 'radio' || input.type === 'checkbox') {
        if (input.checked) res[input.name] = input.value;
      }
      
      else res[input.name] = input.value;

    } else if (input instanceof HTMLSelectElement || input instanceof HTMLTextAreaElement) {
      res[input.name] = input.value;
    }
  })

  return res;
}

export async function makeRequest(url, config: {
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: Record<string, unknown>
}): Promise<any> {

  const res = await fetch("http://localhost:5000" + url, {
    method: config.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: config.data ? JSON.stringify(config.data) : undefined,
  });




  return await res.json()
}