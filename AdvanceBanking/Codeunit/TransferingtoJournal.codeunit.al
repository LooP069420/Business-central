codeunit 90001 "Journal Insertion"
{
    trigger OnRun()
    begin
        InsertCustomerEntires();
        Message('Inserted Successfully1');
    end;

    local procedure InsertCustomerEntires()
    var
        AccountNo: Code[15];
    begin
        AccountStatement.Reset();
        If AccountStatement.FindSet() then
            repeat
                if AccountStatement."Receipt Amount" <> '' then begin
                    AccountNo := Extract.GetFromBCG(AccountStatement."Transaction Details");
                    if CustomerRec.Get(AccountNo) then begin
                        GenLedgSetup.Get();


                        GenJnlBatch.Reset();
                        GenJnlBatch.SetRange(Name, GenLedgSetup."Cash Reciept Batch");
                        If GenJnlBatch.FindFirst() then
                            TemplateName := GenJnlBatch."Journal Template Name";


                        ReceiptJournal.Reset();
                        ReceiptJournal.SetRange("Journal Template Name", TemplateName);
                        ReceiptJournal.SetRange("Journal Batch Name", GenLedgSetup."Cash Reciept Batch");
                        If ReceiptJournal.FindLast() then
                            ReceiptJournal."Line No." := ReceiptJournal."Line No." + 10000
                        else
                            ReceiptJournal."Line No." := 10000;

                        ReceiptJournal.Init();
                        ReceiptJournal.Validate("Journal Template Name", TemplateName);
                        ReceiptJournal.Validate("Journal Batch Name", GenLedgSetup."Cash Reciept Batch");
                        ReceiptJournal.Validate("Posting Date", AccountStatement."Entry Date ");
                        ReceiptJournal.Validate("Account Type", ReceiptJournal."Account Type"::Customer);
                        ReceiptJournal.Validate("Account No.", AccountNo);
                        ReceiptJournal.Validate(Description, AccountStatement."Transaction Details");
                        if (Evaluate(ReceiptJournal.Amount, AccountStatement."Receipt Amount")) then;
                        ReceiptJournal.Insert();
                    end;
                end;
            until AccountStatement.Next() = 0;
    end;


    var
        AccountStatement: Record "Account Statement";
        Extract: Codeunit ExtractFromBCG;
        ReceiptJournal: Record "Gen. Journal Line";
        CustomerRec: Record Customer;
        GenJnlBatch: Record "Gen. Journal Batch";
        GenLedgSetup: Record "General Ledger Setup";
        TemplateName: Code[30];
}