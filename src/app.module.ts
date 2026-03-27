import { Module } from '@nestjs/common';
import { AiModule } from './api/ai/ai.module';
import { AnalyticsModule } from './api/analytics/analytics.module';
import { DnaProfileModule } from './api/dna-profile/dna-profile.module';
import { PostingModule } from './api/posting/posting.module';
import { ScrapingModule } from './api/scraping/scraping.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfraModule } from './infra/infra.module';

@Module({
  imports: [ScrapingModule, AnalyticsModule, DnaProfileModule, AiModule, PostingModule, InfraModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
