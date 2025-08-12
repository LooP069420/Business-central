codeunit 50200 ExcelImport
{
    trigger OnRun()
    begin
        ReadExcel();
        ImportExcelData();
    end;

    var
        FileName: Text[100];
        SheetName: Text[100];
        TempExcelBuffer: Record "Excel Buffer" temporary;
        UploadMsg: Label 'Please choose the Excel file';
        NoFileMsg: Label 'No Excel file found';
        ExcelImportSuccess: Label 'Excel imported successfully';

    local procedure ReadExcel()
    var
        FileManagement: Codeunit "File Management";
        FromFile: Text[100];
        Istream: InStream;
    begin
        UploadIntoStream(UploadMsg, '', '', FromFile, Istream);
        if FromFile <> '' then begin
            FileName := FileManagement.GetFileName(FromFile);
            SheetName := TempExcelBuffer.SelectSheetsNameStream(Istream);
        end else
            Error(NoFileMsg);
        TempExcelBuffer.Reset();
        TempExcelBuffer.DeleteAll();
        TempExcelBuffer.OpenBookStream(Istream, SheetName);
        TempExcelBuffer.ReadSheet();
    end;

    local procedure GetValueAtCell(RowNo: Integer; ColumnNo: Integer): Text
    begin
        TempExcelBuffer.Reset();
        if TempExcelBuffer.Get(RowNo, ColumnNo) then
            exit(TempExcelBuffer."Cell Value as Text")
        else
            exit('');
    end;

    local procedure ImportExcelData()
    var
        Statement: Record "Account Statement";
        RowNo: Integer;
        ColNo: Integer;
        LineNO: Integer;
        MaxRow: Integer;
    begin
        Statement.Reset();
        if Statement.FindLast() then
            LineNO := Statement."Line No";

        TempExcelBuffer.Reset();
        if TempExcelBuffer.FindLast() then
            MaxRow := TempExcelBuffer."Row No.";


        for RowNo := 3 to MaxRow do begin
            LineNO := LineNO + 10000;

            Statement.Init();
            Statement."Line No" := LineNO;
            if (Evaluate(Statement."Entry Date ", GetValueAtCell(RowNo, 1))) then;
            if (Evaluate(Statement."Transaction Details", GetValueAtCell(RowNo, 2))) then;
            if (Evaluate(Statement.Type, GetValueAtCell(RowNo, 3))) then;
            if (Evaluate(Statement."Payment Amount", GetValueAtCell(RowNo, 4))) then;
            if (Evaluate(Statement."Receipt Amount", GetValueAtCell(RowNo, 5))) then;
            Statement.Insert();
        end;
        Message(ExcelImportSuccess);
    end;
}