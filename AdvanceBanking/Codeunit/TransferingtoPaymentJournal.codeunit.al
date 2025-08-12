codeunit 90002 "Payment Insertion"
{
    trigger OnRun()
    begin
        InsertVendorEntries();
        Message('Records Added to Payment Journal');
    end;

    local procedure InsertVendorEntries()
    var
        AccountNo: Code[15];
    begin
        AccountStatement.Reset();
        if AccountStatement.FindSet() then
            repeat
                if AccountStatement."Payment Amount" <> '' then begin
                    AccountNo := Extract.GetFromBCG(AccountStatement."Transaction Details");
                    if VendorRec.Get(AccountNo) then begin
                        GenLedgSetup.Get();

                        GenJnlBatch.Reset();
                        GenJnlBatch.SetRange(Name, GenLedgSetup."Payment Batch");
                        if GenJnlBatch.FindFirst() then
                            TemplateName := GenJnlBatch."Journal Template Name";

                        PaymentJournal.Reset();
                        PaymentJournal.SetRange("Journal Template Name", TemplateName);
                        PaymentJournal.SetRange("Journal Batch Name", GenLedgSetup."Payment Batch");
                        If PaymentJournal.FindLast() then
                            PaymentJournal."Line No." := PaymentJournal."Line No." + 10000
                        else
                            PaymentJournal."Line No." := 10000;

                        PaymentJournal.Init();
                        PaymentJournal.Validate("Journal Template Name", TemplateName);
                        PaymentJournal.Validate("Journal Batch Name", GenLedgSetup."Payment Batch");
                        PaymentJournal.Validate("Account Type", PaymentJournal."Account Type"::Vendor);
                        PaymentJournal.Validate("Posting Date", AccountStatement."Entry Date ");
                        PaymentJournal.Validate("Account No.", AccountNo);
                        PaymentJournal.Validate(Description, AccountStatement."Transaction Details");
                        if Evaluate(PaymentJournal.Amount, AccountStatement."Payment Amount") then;
                        PaymentJournal.Insert();
                    end;
                end;
            until AccountStatement.Next() = 0;
    end;

    var
        AccountStatement: Record "Account Statement";
        Extract: Codeunit ExtractFromBCG;
        PaymentJournal: Record "Gen. Journal Line";
        VendorRec: Record Vendor;
        GenJnlBatch: Record "Gen. Journal Batch";
        GenLedgSetup: Record "General Ledger Setup";
        TemplateName: Code[30];
}