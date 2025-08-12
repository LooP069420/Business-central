tableextension 50200 GLSetupExt extends "General Ledger Setup"
{
    fields
    {
        field(50100; "Cash Reciept Batch"; Code[30])
        {
            Caption = 'Cash Reciept Batch';
            NotBlank = true;
            TableRelation = "Gen. Journal Batch".Name WHERE("Template Type" = const("Cash Receipts"));
        }
        field(50101; "Payment Batch"; Code[30])
        {
            Caption = 'Payment Batch';
            NotBlank = true;
            TableRelation = "Gen. Journal Batch".Name WHERE("Template Type" = const("Payments"));
        }
    }
}