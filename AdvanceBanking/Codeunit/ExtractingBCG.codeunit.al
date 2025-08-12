codeunit 90000 ExtractFromBCG
{
    trigger OnRun()
    begin
    end;

    procedure GetFromBCG(Description: Text[100]): Code[15]
    var
        StartPos: Integer;
        AccountNo: Code[15];
        Temptext: Text[100];

    begin
        StartPos := StrPos(Description, 'BGCFrom:');
        if StartPos > 0 then begin
            TempText := CopyStr(Description, StartPos + 9);
            AccountNo := CopyStr(TempText, 10, 15);
            exit(AccountNo);
        end else
            Message('BCGFrom not found in description.');
    end;

    var
        myInt: Integer;
}