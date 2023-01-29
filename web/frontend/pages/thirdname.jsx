import { Card, Page, Layout, TextContainer, Heading, Frame, Navigation } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import './../assets/styles.css'

export default function ThirdName() {
  return (
    <Page fullWidth>
      <TitleBar
        title="Third name"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
        
      />
        <Frame>
          <Navigation>
          <div class="sidebar">
        <div class="sidebar-top">
            <i class="logo fa-brands fa-sketch"></i>
            <span class="brand">The App</span>
        </div>
        <div class="sidebar-center">
            <ul class="list">
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-house"></i>
                    <span class="list-item-text">Dashboard</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-magnifying-glass"></i>
                    <span class="list-item-text">Search</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-sharp fa-solid fa-compact-disc"></i>
                    <span class="list-item-text">Insights</span>
                </li>
                <li class="list-item active">
                    <i class="list-item-icon fa-solid fa-print"></i>
                    <span class="list-item-text">Docs</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-magnifying-glass"></i>
                    <span class="list-item-text">Community</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-dumpster-fire"></i>
                    <span class="list-item-text">Tools</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-magnifying-glass"></i>
                    <span class="list-item-text">Market</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-republican"></i>
                    <span class="list-item-text">Resources</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-magnifying-glass"></i>
                    <span class="list-item-text">Community</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-dumpster-fire"></i>
                    <span class="list-item-text">Tools</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-magnifying-glass"></i>
                    <span class="list-item-text">Market</span>
                </li>
                <li class="list-item">
                    <i class="list-item-icon fa-solid fa-republican"></i>
                    <span class="list-item-text">Resources</span>
                </li>
            </ul>
        </div>
        <div class="sidebar-bottom">
            <div class="color-box dark"></div>
            <div class="color-box night"></div>
            <div class="color-box light"></div>
        </div>
    </div>

          </Navigation>
     

          </Frame>
      <Layout>
        <Layout.Section>
          <h1>hello world</h1>
        </Layout.Section>
        <Layout.Section>
        
       
        </Layout.Section>
      </Layout>
    </Page>
  );
}