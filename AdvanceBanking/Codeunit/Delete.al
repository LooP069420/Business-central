codeunit 51000 Delete
{
    trigger OnRun()
    var
        GenJnlLine: Record "Gen. Journal Line";
    begin
        GenJnlLine.DeleteAll();
    end;

    var
        myInt: Integer;
}