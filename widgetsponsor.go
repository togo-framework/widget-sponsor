// Package widgetsponsor is the "Sponsor" DRIVER — Support CTA with GitHub Sponsors + Buy-me-a-coffee and perks.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-sponsor"
package widgetsponsor

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "sponsor",
		Title:       "Sponsor",
		DefaultZone: "sidebar",
		Asset:       "/widgets/sponsor.js",
	})
}
