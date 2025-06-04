import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails () {
    return (
        <DialogContent>
           <DialogHeader>
            <DialogTitle>Pedido: AHrhauihiasnfk@4r@#34ed</DialogTitle>
            <DialogDescription>Detalhes do pedido</DialogDescription>
           </DialogHeader>

           <div className="space-y-6">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-muted-foreground">Status</TableCell>
                        <TableCell className="flex justify-end">
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                        </TableCell>
                    </TableRow>

                                        <TableRow>
                        <TableCell className="text-muted-foreground">Cliente</TableCell>
                        <TableCell className="flex justify-end">
                                Yruam Käffer de Faria
                        </TableCell>
                    </TableRow>

                                        <TableRow>
                        <TableCell className="text-muted-foreground">Telefone</TableCell>
                        <TableCell className="flex justify-end">
                               (47) 9 9617-3658
                        </TableCell>
                    </TableRow>

                                                            <TableRow>
                        <TableCell className="text-muted-foreground">E-mails</TableCell>
                        <TableCell className="flex justify-end">
                               yruamkf@gmail.com
                        </TableCell>
                    </TableRow>

                                                            <TableRow>
                        <TableCell className="text-muted-foreground">Realizado</TableCell>
                        <TableCell className="flex justify-end">
                               há 3 minutos
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Produto</TableHead>
                        <TableHead className="text-right">Qtd.</TableHead>
                        <TableHead className="text-right">Preço</TableHead>
                        <TableHead className="text-right">Subtotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>Pizza de peperoni (G)</TableCell>
                        <TableCell className="text-right">2</TableCell>
                        <TableCell className="text-right">R$ 69,95</TableCell>
                        <TableCell className="text-right">R$ 139,90</TableCell>
                    </TableRow>

                                        <TableRow>
                        <TableCell>Pizza de marguerita (M)</TableCell>
                        <TableCell className="text-right">2</TableCell>
                        <TableCell className="text-right">R$ 45,00</TableCell>
                        <TableCell className="text-right">R$ 90,00</TableCell>
                    </TableRow>
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total do pedido</TableCell>
                        <TableCell className="text-right font-medium">R$ 229,90</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
           </div>
        </DialogContent>
    )
}