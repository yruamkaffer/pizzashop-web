import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
    return (
<TableRow>
                            <TableCell>
                            <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="outline" size="xs">
                                        <Search className="h-3 w-3" />
                                        <span className="sr-only">Detalhes do pedido</span> 
                                    </Button>
                                </DialogTrigger>
                                <OrderDetails />

                            </Dialog>
                            </TableCell>
                            <TableCell className="font-mono text-sx font-medium">Aggdgr@23512SAF</TableCell>
                            <TableCell className="text-muted-foreground"> há 15 minutos</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                                    <span className="font-medium text-muted-foreground">Pendente</span>
                                </div>
                            </TableCell>
                            <TableCell className="font-medium">Yruam Käffer</TableCell>
                            <TableCell className="font-medium">R$153,90</TableCell>

                            <TableCell>
                                <Button variant="outline" size="xs">
                                    <ArrowRight className="mr-w h-3 w-3"/>
                                    Aprovar
                                </Button>
                            </TableCell>

                            <TableCell>
                                <Button variant="ghost" size="xs">
                                    <X className="mr-w h-3 w-3" />
                                    Cancelar
                                </Button>
                            </TableCell>
                        </TableRow>
    )
}