page 50113 "PickUp/Ship"
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
            //Dont keep in group
            usercontrol(T1; PickupShip)
            {
                ApplicationArea = All;

                trigger OnTileClicked(FeatureName: Text)
                begin
                    case FeatureName of
                        'Warehouse Pick':
                            PAGE.RUN(PAGE::"Vendor List");
                        'Place & Register':
                            PAGE.RUN(PAGE::"Zone List");
                        'Item Ready to Ship':
                            PAGE.RUN(PAGE::"Agent List");
                    end;
                end;
            }
        }
    }
}