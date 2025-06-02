import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const signUpForm = z.object({
  email: z.string().email("E-mail inválido"),
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string()
});

type SignUpForm = z.infer<typeof signUpForm>;

export function SignUp() {

    const navigate = useNavigate();

  const { register, handleSubmit, formState: {isSubmitting} } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Restaurante cadastrado com sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/sign-in"),
      }});
    } catch {
      toast.error("Erro ao cadastrar restaurante.");
    }
  }

  return (
    <div className="p-8">
        <Button asChild className="absolute top-8 right-8" variant="ghost">
            <Link to={"/sign-in"}>
                Fazer login
            </ Link>
        </Button>

      <title>Cadastro | pizza.shop</title>

      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
          <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
        </div>

        <div>
          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="restaurantName" className="text-sm font-medium">Nome do estabelecimento</Label>
              <Input id="restaurantName" type="text" {...register('restaurantName')}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName" className="text-sm font-medium">Seu nome</Label>
              <Input id="managerName" type="text" {...register('managerName')}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">Seu celular</Label>
              <Input id="phone" type="tel" {...register('phone')}/>
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit"> Finalizar cadastro</Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                Ao continuar,
                 você concorda com nossos <a className="underline underline-offset-4" href="#">termos de serviço</a> e <a className="underline underline-offset-4" href="#">politicas de privacidade</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}