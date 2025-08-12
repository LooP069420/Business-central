pageextension 50300 GLSetupExt extends "General Ledger Setup"
{
    layout
    {
        addafter(Application)
        {
            group(Batch)
            {
                field("Cash Reciept Batch"; Rec."Cash Reciept Batch")
                {
                    ApplicationArea = all;
                    Caption = 'Cash Receipt Batch';
                }
                field("Payment Batch"; Rec."Payment Batch")
                {
                    ApplicationArea = all;
                    Caption = 'Payment Batch';
                }
            }
        }
    }

    actions
    {
        // Add changes to page actions here
    }

    var
        myInt: Integer;
}