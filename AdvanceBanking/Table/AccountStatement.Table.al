table 50104 "Account Statement"
{
    Caption = 'Account Statement';

    fields
    {
        field(50102; "Entry Date "; Date)
        {
            Caption = 'Entry Date';
        }
        field(50103; "Transaction Details"; Text[100])
        {
            Caption = 'Transaction Details';
        }
        field(50104; "Type"; Text[100])
        {
            Caption = 'Transaction Type';
        }
        field(50105; "Payment Amount"; Text[50])
        {
            Caption = 'Payment Amount';
        }
        field(50106; "Receipt Amount"; Text[50])
        {
            Caption = 'Receipt Amount';
        }
        field(50107; "Line No"; Integer)
        {
            Caption = 'Line No';
        }
    }

    keys
    {
        key(Key1; "Line No")
        {
            Clustered = true;
        }
    }
}