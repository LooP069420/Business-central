page 50111 "Receive/Putaway"
{
    PageType = CardPart;
    ApplicationArea = All;
    UsageCategory = Administration;
    Caption = ' ';
    Editable = false;

    layout
    {
        area(Content)
        {
            //Do not keep this in the group
            usercontrol(T1; ReceivePutaway)
            {
                ApplicationArea = All;

                trigger OnTileClicked(FeatureName: Text)
                begin
                    case FeatureName of
                        'Warehouse Adjustment':
                            PAGE.RUN(PAGE::"Customer List");
                        'Warehouse Put Away':
                            PAGE.RUN(PAGE::"Item List");
                        'Warehouse Reclassification':
                            PAGE.RUN(PAGE::"Job List");
                        'Item Bin Content':
                            PAGE.RUN(PAGE::"Sales List");
                        'Physical Inventory':
                            PAGE.RUN(PAGE::"Profile List");
                    end;
                end;
            }
        }
    }
}