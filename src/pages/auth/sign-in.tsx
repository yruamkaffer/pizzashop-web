import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signInForm = z.object({
  email: z.string().email("E-mail inválido"),
});

type SignInForm = z.infer<typeof signInForm>;

export function SignIn() {

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignInForm>();

  async function handleSignIn(data: SignInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Enviamos um link de autenticação para seu e-mail!", {
        action: {
          label: "Reenviar",
          onClick: () => handleSignIn(data),
      }});
    } catch {
      toast.error("Credenciais inválidas.");
    }
  }

  return (
    <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant="ghost">
            <Link to={"/sign-up"}>
                Novo estabelecimento
            </ Link>
        </Button>

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