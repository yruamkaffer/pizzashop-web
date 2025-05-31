import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>({});

  async function handleSignIn(data: SignInForm) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Dados do formulário:", data);
  }

  return (
    <div className="p-8">
      <title>Login | pizza.shop</title>

      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
          <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
        </div>

        <div>
          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Seu e-mail
              </Label>
              <Input id="email" type="email" {...register('email')}/>
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit"> Acessar painel</Button>
          </form>
        </div>
      </div>
    </div>
  );
}