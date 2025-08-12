page 50200 "Account Statement"
{
    PageType = Worksheet;
    ApplicationArea = All;
    UsageCategory = Tasks;
    SourceTable = "Account Statement";
    SourceTableView = sorting("Line No");
    AutoSplitKey = true;
    DelayedInsert = true;

    layout
    {
        area(Content)
        {
            repeater(group)
            {
                Editable = false;
                field("Line No"; Rec."Line No")
                {
                    Visible = false;
                    ApplicationArea = all;
                }
                field("Entry Date "; Rec."Entry Date ")
                {
                    ApplicationArea = all;
                    Caption = 'Entry Date ';
                }
                field("Transaction Details"; Rec."Transaction Details")
                {
                    ApplicationArea = all;
                    Caption = 'Transaction Details';
                }
                field(Type; Rec.Type)
                {
                    ApplicationArea = all;
                    Caption = 'Transaction Type';
                }
                field("Payment Amount"; Rec."Payment Amount")
                {
                    ApplicationArea = all;
                    Caption = 'Payment Amount';
                }
                field("Receipt Amount"; Rec."Receipt Amount")
                {
                    ApplicationArea = all;
                    Caption = 'Receipt Amount';
                }
            }
        }
    }

    actions
    {
        area(Promoted)
        {
            actionref(Import_promoted; Import) { }
            actionref(Extract_promoted; Extract) { }

            actionref(ReceiptEntries_promoted; "Receipt Entries") { }

            actionref(PaymentEntries_promoted; "Payment Entries") { }
        }
        area(Processing)
        {
            action(Import)
            {
                trigger OnAction()
                var
                    Import: Codeunit ExcelImport;
                    GLSetup: Record "General Ledger Setup";
                begin
                    Import.Run();
                end;
            }

            action(Extract)
            {
                trigger OnAction()
                var
                    ExtractFrom: Codeunit ExtractFromBCG;
                begin
                    ExtractFrom.Run();
                end;
            }

            action("Receipt Entries")
            {
                trigger OnAction()
                var
                    Transfer: Codeunit "Journal Insertion";
                begin
                    Transfer.Run();
                end;
            }

            action("Payment Entries")
            {
                trigger OnAction()
                var
                    Transfer: Codeunit "Payment Insertion";
                begin
                    Transfer.Run();
                end;
            }

            action(Refresh)
            {
                trigger OnAction()
                var
                    Refresh: Codeunit Delete;
                begin
                    Refresh.Run();
                end;
            }
        }
    }
}