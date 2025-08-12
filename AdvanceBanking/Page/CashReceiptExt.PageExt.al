pageextension 90001 CashReceiptExt extends "Cash Receipt Journal"
{
    actions
    {
        addafter("F&unctions")
        {
            action("Statement Entries")
            {
                Caption = 'Statement Entries';
                Promoted = true;
                // PromotedCategory = Process;
                PromotedIsBig = true;
                trigger OnAction()
                var
                    Statement: Codeunit "Journal Insertion";
                begin
                    Statement.Run();
                end;
            }
        }
    }

    var
        myInt: Integer;
}